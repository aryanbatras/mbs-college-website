import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getSiteConfig } from "@/lib/content";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function VirtualTourPage() {
  const config = getSiteConfig();

  return (
    <>
      <Header config={config} />
      <main id="main-content" className="flex-1">
        <div className="bg-white">
          {/* Hero */}
          <div className="bg-[#00274C] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
              <Breadcrumb items={[{ label: "Campus", href: "/campus" }, { label: "Virtual Tour" }]} />
              <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Virtual Tour
              </h1>
              <p className="mt-4 max-w-2xl text-base text-white/70 leading-relaxed">
                Explore our campus from anywhere. Take a virtual walk through our facilities,
                labs, library, and more.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
            {/* Google Maps Embed */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#00274C] mb-6">Campus Location</h2>
              <div className="w-full h-[450px] bg-[#F9FAFB] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.574154380378!2d74.84899717630721!3d32.67077458940674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9b3f8037351f%3A0xb9054afb3d23d080!2sMahant%20Bachittar%20Singh%20College%20Of%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1785979773219!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="MBSCET Campus Location"
                />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-[#5C6370]">
                  {config.address.line1}, {config.address.line2}, {config.address.city} — {config.address.pincode}
                </p>
                <a
                  href="https://www.google.com/maps/place/Mahant+Bachittar+Singh+College+Of+Engineering+And+Technology/@32.6707745,74.8489972,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </section>

            {/* Virtual Tour - Street View */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#00274C] mb-6">360° Street View</h2>
              <p className="text-[#5C6370] mb-6 max-w-3xl">
                Experience a 360-degree panoramic view of our campus. Click the button below to
                explore the college grounds through Google Street View.
              </p>
              <div className="bg-[#F9FAFB] p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#00274C] mb-2">
                      Explore Campus in Street View
                    </h3>
                    <p className="text-sm text-[#5C6370] mb-4">
                      Walk through the campus grounds, see the buildings, gardens, and facilities
                      in immersive 360° panoramic imagery.
                    </p>
                    <a
                      href="https://www.google.co.in/maps/uv?hl=en&pb=!1s0x391e9b3f8037351f%3A0xb9054afb3d23d080!2m17!8m2!1m1!1e2!16m13!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e4!2m2!1m1!1e5!3m1!7e115!4s%2Fmaps%2Fplace%2Fmbs%2Bcollege%2F%4032.6462339%2C74.8151552%2C3a%2C75y%2C357.7h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sdN-kyVG2SXMAAAQvxaW-Wg*212e0*214m2*213m1*211s0x391e9b3f8037351f%3A0xb9054afb3d23d080&imagekey=!1e2!2sTG3LNh-5qu4AAAQvxaTFTg&sa=X&ved=0ahUKEwj29v6Uu7_UAhUJOY8KHWXPDKMQoB8IggEwCg&activetab=panorama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#00274C] text-[#FFCB05] px-6 py-3 text-sm font-bold hover:bg-[#1E406B] transition-colors"
                    >
                      Launch Virtual Tour
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="w-full md:w-64 aspect-video bg-[#00274C]/5 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto text-[#FFCB05] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs text-[#5C6370]">360° Panoramic View</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Campus Photos */}
            <section>
              <h2 className="text-2xl font-bold text-[#00274C] mb-6">Campus Photos</h2>
              <p className="text-[#5C6370] mb-6 max-w-3xl">
                Browse through our collection of campus photos showcasing the infrastructure,
                labs, library, and other facilities.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { src: "/media/homepage/admin-block.jpg", alt: "Administrative Block" },
                  { src: "/media/homepage/auditorium.jpg", alt: "Auditorium" },
                  { src: "/media/homepage/central-park.jpg", alt: "Central Park" },
                  { src: "/media/homepage/library.jpg", alt: "Library" },
                  { src: "/media/homepage/computer-lab.jpg", alt: "Computer Lab" },
                  { src: "/media/homepage/seminar-hall.jpg", alt: "Seminar Hall" },
                  { src: "/media/homepage/playground.jpg", alt: "Playground" },
                  { src: "/media/homepage/canteen.jpg", alt: "Canteen" },
                ].map((photo) => (
                  <a
                    key={photo.alt}
                    href={photo.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-[4/3] overflow-hidden bg-[#F9FAFB] group"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="/campus/galleries"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#00274C] hover:text-[#FFCB05] transition-colors"
                >
                  View Full Gallery →
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer config={config} />
    </>
  );
}
