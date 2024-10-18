import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">About Ink Masters</h1>
      <p className="text-lg sm:text-xl text-center mb-8">Crafting stories on skin since 2005</p>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="/about-image.jpg"
            alt="Ink Masters Tattoo Studio"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-base sm:text-lg mb-4">
            Ink Masters is Johannesburg&apos;s premier tattoo parlor, dedicated to bringing your artistic visions to life. With a team of skilled and experienced artists, we specialize in a wide range of styles, from traditional to contemporary designs.
          </p>
          <p className="text-base sm:text-lg mb-4">
            Our studio is equipped with state-of-the-art equipment, ensuring the highest standards of hygiene and safety. We take pride in creating a welcoming and comfortable environment for all our clients, whether you&apos;re getting your first tattoo or adding to your collection.
          </p>
          <p className="text-base sm:text-lg">
            At Ink Masters, we believe that every tattoo tells a story. Let us help you tell yours with beautiful, personalized artwork that you&apos;ll cherish for a lifetime.
          </p>
        </div>
      </div>
    </div>
  )
}