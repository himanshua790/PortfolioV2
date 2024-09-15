import Image from 'next/image'

import Tooltip from '@/components/elements/Tooltip'
import { MdVerified as VerifiedIcon } from 'react-icons/md'

import { PROFILE_URL } from '@/common/constant'

export default function MeProfile() {
  return (
    <div data-testid="me-profile" className="mt-6 flex flex-col items-center space-y-2 px-6" data-aos="zoom-in-down">
      <div className="rounded-full border border-neutral-200 p-2 dark:border-neutral-700">
        <div className="overflow-hidden rounded-full">
          <Image
            src={PROFILE_URL}
            alt="profile"
            width={80}
            height={80}
            className="rounded-full transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="mt-1 flex items-center gap-2 lg:mt-4">
        <h2 className="font-sora flex-grow text-lg font-medium lg:text-xl">Himanshu Soni</h2>
        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" data-testid="verified-icon" />
        </Tooltip>
      </div>
      <p className="text-center text-sm leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
        Software Engineer who focus on web development.
      </p>
    </div>
  )
}
