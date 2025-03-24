import { Metadata } from 'next'

import Container from '@/components/elements/Container'
import PageHeading from '@/components/elements/PageHeading'
// import { getCodeBayuData, getPromotions } from '@/services/api'
import { MdUpcoming } from 'react-icons/md'

import { METADATA } from '@/common/constant/metadata'

// import { IAdsBanner } from '@/common/types/ads'
// import { IRoadmap } from '@/common/types/roadmap'

// import Roadmap from '@/modules/roadmap'

console.log('Roadmap', process.env.DOMAIN)
export const metadata: Metadata = {
  title: `Roadmap ${METADATA.exTitle}`,
  description: 'Learning path recomendation and free course playlist for software engineer',
  alternates: {
    canonical: `${process.env.DOMAIN}/roadmap`
  }
}

const PAGE_TITLE = 'Roadmap'
const PAGE_DESCRIPTION = 'Learning path recomendation and free course playlist'

export default async function RoadmapPage() {
  // const roadmaps = await getRoadmaps()
  // const promotions = await getPromotions()
  // const promotion = promotions.find((item: IAdsBanner) => item.showingOn.includes('/roadmap'))
  return (
    <>
      <Container data-aos="fade-left">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        {/* <Roadmap roadmaps={roadmaps} promotion={promotion} /> */}
        <WorkInProgress />
      </Container>
    </>
  )
}

// async function getRoadmaps(): Promise<IRoadmap> {
//   const response = await getCodeBayuData()
//   return response?.roadmaps || { frontend: [], mastering_react: [] }
// }
const WorkInProgress = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <MdUpcoming className="mb-4 text-7xl text-gray-400" />
      <h2 className="mb-2 text-2xl font-bold">Work in Progress</h2>
      <p className="mb-4 max-w-md text-gray-600">
        We&apos;re currently building this roadmap section to provide you with comprehensive learning paths and resources.
      </p>
      <p className="text-sm text-gray-500">Check back soon for updates!</p>
    </div>
  )
}
