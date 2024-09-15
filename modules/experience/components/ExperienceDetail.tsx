import Image from 'next/image'

import MDXComponent from '@/components/elements/MDXComponent'
import { format } from 'date-fns'

import { getCloudinaryUrl } from '@/common/libs/cloudinary'
import loadMdxFiles from '@/common/libs/mdx'
import { ICareer } from '@/common/types/careers'

export default function ExperienceDetail(props: ICareer) {
  const { logo, company, position, location, location_type, start_date, end_date, slug } = props

  const startDate = new Date(start_date)
  const endDate = end_date ? new Date(end_date) : new Date()

  console.log(slug)

  const contents = loadMdxFiles(slug, 'experience')
  const content = contents.find(item => item.slug === slug)?.content

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between space-x-4 border-b border-dashed border-neutral-600 pb-4">
        <div>
          <h2 className="text-2xl font-semibold">{company}</h2>
          <div className="mt-1 flex gap-1 text-sm">
            <span>{format(startDate, 'MMM yyyy')}</span> -{' '}
            <span>{end_date ? format(endDate, 'MMM yyyy') : 'Present'}</span>
          </div>
        </div>
        {/* // TODO: Add logo to cloudinary */}

        <Image src={getCloudinaryUrl(logo)} alt={company} width={60} height={60} />
      </div>
      <p className="font-sans text-neutral-700 dark:text-neutral-300">
        At {company}, I proudly served as <strong>{position}</strong> based in {location}, contributing my expertise
        from {format(startDate, 'MMM yyyy')} to {end_date ? format(endDate, 'MMM yyyy') : 'Present'} in a dynamic{' '}
        {location_type} setting.
      </p>
      {content && <MDXComponent>{content}</MDXComponent>}
    </div>
  )
}
