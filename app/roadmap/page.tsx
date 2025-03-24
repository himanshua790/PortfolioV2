import { Metadata } from 'next'

import Container from '@/components/elements/Container'
import PageHeading from '@/components/elements/PageHeading'
// import { getCodeBayuData, getPromotions } from '@/services/api'
import { MdUpcoming } from 'react-icons/md'

import { METADATA } from '@/common/constant/metadata'

import WorkInProgress from '../components/ui/WorkInProgress'

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
        <WorkInProgress
          icon={MdUpcoming}
          title="Feature Coming Soon"
          description="We're working on an exciting new feature that will be available in the next update."
          footerText="Expected release: Next month"
        />
      </Container>
    </>
  )
}

// async function getRoadmaps(): Promise<IRoadmap> {
//   const response = await getCodeBayuData()
//   return response?.roadmaps || { frontend: [], mastering_react: [] }
// }
