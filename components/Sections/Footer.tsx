'use client'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()
  const isActive = (href: string) => {
    return pathname === href
  }
  return (
    <>
      {isActive('/signin') ||
      isActive('/admin') ||
      isActive('/admin/team') ||
      isActive('/admin/contact') ||
      isActive('/admin/blog') ? (
        ''
      ) : (
        <footer className="bg-[#111] py-6 cursor-default">
          <div className="w-full">
            <hr className="text-gray-500 text-center w-[80%] mx-auto py-2 px-2" />
            <div className="flex justify-center pb-4 px-4">
              <a
                href="https://elevenlabs.io/impact-program"
                target="_blank"
                rel="noopener"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://eleven-public-cdn.elevenlabs.io/payloadcms/csnjio02mx4-elevenlabs-logo-white.svg"
                  alt="ElevenLabs Impact Program"
                  className="h-5 sm:h-6 w-auto"
                />
              </a>
            </div>
            <div className="text-center text-gray-500">
              <p>
                Copyright © 2024 United Nations Association of Rwanda. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  )
}

export default Footer
