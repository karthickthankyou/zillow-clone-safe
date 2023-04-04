import {
  MyPropertiesDocument,
  MyPropertiesQuery,
  UpdatePropertyDocument,
  useUpdatePropertyMutation,
} from 'src/generated/graphql'
import Image from 'src/components/atoms/Image'
import { getHomeTypes } from 'src/store/static'

import { Switch } from '@headlessui/react'
import { useState } from 'react'
import { client } from 'src/config/urqlClientWonka'
import { notify } from 'src/hooks'
import { MyProperties } from 'src/query.gql'
import Link from 'next/dist/client/link'

export interface IMyHomesCardProps {
  home: MyPropertiesQuery['myProperties'][0]
}

const setPublishedState = ({
  id,
  published,
}: {
  id: number
  published: boolean
}) => {
  client
    .mutation(UpdatePropertyDocument, {
      id,
      published,
    })
    .toPromise()
    .then((result) => {
      if (result.error) {
        notify({ message: `Oops something went wrong.`, type: 'error' })
      }
      const publishedState = result.data.update_homes_by_pk.published

      if (result.data.update_homes_by_pk) {
        if (publishedState)
          notify({ message: `Home published for public view.` })
        else notify({ message: `Home unpublished. No one can view this home.` })
      }
    })
    .catch((err) =>
      notify({ message: `Oops. something went wrong.`, type: 'error' })
    )
}

const MyHomesCard = ({ home }: IMyHomesCardProps) => {
  const [published, setPublished] = useState(() => home.published)

  const homePlan = getHomeTypes(home.plan)

  const [updateProperty, { data }] = useUpdatePropertyMutation({
    refetchQueries: [{ query: MyPropertiesDocument }],
  })

  return (
    <div>
      <div className='relative h-64 overflow-hidden border border-white rounded shadow-lg'>
        <Link href={`/homes/${home.id}`}>
          <Image
            alt=''
            layout='fill'
            src={home.imgs && home.imgs[0]}
            className='h-full'
          />
        </Link>
        <div className='absolute top-0 left-0 '>
          <div className='z-10 text-white'>
            <div className={` px-1 py-0.5 text-xs ${homePlan.bg}`}>
              {homePlan.displayName}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-2 ml-1 '>
        <div className='font-semibold'>$ {home.price}</div>
        <div className='mt-1 text-gray-800'>{home.address}</div>
        <div className='flex items-center gap-2 py-1 mt-1 text-sm text-gray-800'>
          <div>Public:</div>
          <Switch
            checked={published || false}
            onChange={async (v) => {
              await updateProperty({
                variables: { updatePropertyInput: { id: home.id, published } },
              })

              setPublished((state) => !state)
            }}
            className={` ${
              home.published ? 'bg-luxury' : 'bg-gray-200'
            } relative inline-flex homes-center p-1 h-6 shadow-inner rounded-full w-12`}
          >
            <span
              className={`${
                home.published ? 'translate-x-6' : 'translate-x-0'
              } inline-block w-4 h-4  transform bg-white rounded-full transition-transform`}
            />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default MyHomesCard
