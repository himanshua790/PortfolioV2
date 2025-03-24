// import AnalyticIlustration from '@/components/elements/AnalyticIlustration'
// import MobileIlustration from '@/components/elements/MobileIlustration'
// import SeoIlustration from '@/components/elements/SeoIlustration'
// import WebIlustration from '@/components/elements/WebIlustration'
import { Card } from '@/components/elements/Card'

interface ServicesCardProps {
  title: string
  description: string
  id: string
  icon?: string
}

export default function ServicesCard({ title, description }: ServicesCardProps) {
  return (
    <Card
      className="relative border border-neutral-200 p-4 dark:border-neutral-700 md:p-6"
      aria-label={`Service card for ${title}`}
    >
      <div className="mb-5 flex items-center justify-center px-6 py-4">
        {/* {id === '10001' && <WebIlustration />}
        {id === '10002' && <MobileIlustration />}
        {id === '10003' && <AnalyticIlustration />}
        {id === '10004' && <SeoIlustration />} */}
      </div>

      <div className="w-full space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808019_1px,transparent_1px),linear-gradient(to_bottom,#80808019_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]" />
    </Card>
  )
}
