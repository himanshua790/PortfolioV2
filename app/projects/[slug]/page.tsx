import { Metadata } from 'next'

import BackButton from '@/components/elements/BackButton'
import Container from '@/components/elements/Container'
import PageHeading from '@/components/elements/PageHeading'
import { getCodeBayuData } from '@/services/api'

import { METADATA } from '@/common/constant/metadata'
import loadMdxFiles from '@/common/libs/mdx'
import { IProjectItem } from '@/common/types/projects'

import ProjectDetail from '@/modules/projects/components/ProjectDetail'

interface ProjectsDetailPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: ProjectsDetailPageProps): Promise<Metadata> {
  const project = await getProjectDetail(params.slug)
  if (!project) return {}
  let openGraphUrl: string
  let canonicalUrl: string

  try {
    openGraphUrl = new URL(`${METADATA.openGraph.url}/${project.slug}`).toString()
  } catch (error) {
    console.error('Invalid OpenGraph URL:', error)
    openGraphUrl = `${process.env.DOMAIN}` // Fallback to domain root
  }

  try {
    canonicalUrl = new URL(`${process.env.DOMAIN}/projects/${params.slug}`).toString()
  } catch (error) {
    console.error('Invalid Canonical URL:', error)
    canonicalUrl = `${process.env.DOMAIN}` // Fallback to domain root
  }

  return {
    title: `${project.title} ${METADATA.exTitle}`,
    description: project.description,
    openGraph: {
      images: project.image,
      url: openGraphUrl,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: METADATA.creator
    },
    keywords: project.title,
    alternates: {
      canonical: canonicalUrl
    }
  }
}

export default async function ProjectDetailPage({ params }: ProjectsDetailPageProps) {
  const detail = await getProjectDetail(params.slug)
  if (!detail?.title) return null
  return (
    <>
      <Container data-aos="fade-left">
        <BackButton url="/projects" />
        <PageHeading title={detail.title} description={detail.description} />
        <ProjectDetail {...detail} />
      </Container>
    </>
  )
}

async function getProjectDetail(slug: string): Promise<IProjectItem | undefined> {
  const response = await getCodeBayuData()
  const projects = response?.projects || []
  if (projects?.length <= 0) return undefined
  const project = projects.find(item => item.slug === slug) as IProjectItem
  const contents = loadMdxFiles(slug, 'projects')
  const content = contents.find(item => item.slug === slug)
  const newResponse = { ...project, content: content?.content }
  return newResponse
}
