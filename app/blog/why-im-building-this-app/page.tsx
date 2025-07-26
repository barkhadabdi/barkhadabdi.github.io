import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"

export default function WhyImBuildingThisApp() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              March 20, 2024
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why I'm Building This App</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A personal journey about preserving Somali language and culture for my children in Denmark.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              I live in Denmark with my wife and two kids. She's Danish-Somali and speaks Danish to them. I speak
              English most of the time, and only occasionally drop in Somali phrases. When we're around
              family—especially my in-laws—Somali appears, but even there, Danish often takes over.
            </p>

            <p>
              We didn't plan it this way. It just happened. Danish was easy, English was familiar, and Somali felt like
              something we'd "get to" later.
            </p>

            <p>
              Now, our oldest daughter is eight. She understands some Somali, but she doesn't want to speak it. And I
              don't blame her—it's not what she hears every day. Still, it hurts. I think about the questions she might
              ask when she's older: "Why didn't you teach us Somali?"
            </p>

            <p>That's what inspired this app.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why It Has to Be Audio-First</h2>

            <p>
              Neither of our kids are fluent readers yet—especially not in Somali. So this isn't about spelling tests or
              grammar lessons. It's about hearing the language, recognizing it, and using it naturally.
            </p>

            <p>
              This app will focus on sounds, images, and actions. Everyday things. Verbs we use at home. Simple phrases.
              Words they can hear and repeat, even before they fully understand. A soft and playful way to bring Somali
              back into our home.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why This Matters to Me</h2>

            <p>Language isn't just communication—it's belonging. It's roots. It's memory.</p>

            <p>
              Without Somali, my kids might grow up fluent in two languages… and still feel like outsiders in their own
              culture. I don't want that. I want them to feel proud. To feel connected. To feel Somali.
            </p>

            <p>
              This app is my attempt to gently reverse the drift—to make Somali normal, fun, and part of everyday life
              again.
            </p>

            <hr className="my-12 border-gray-200" />

            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Dream</h2>

            <p>
              Right now, this app is just for my family. But I hope it can help others too—parents in Denmark, the UK,
              the US, Canada. Somali parents anywhere raising kids in a different world than the one they grew up in.
            </p>

            <p>
              Someday, I hope it grows to include books, audiobooks, and even a little store with cultural resources for
              families like mine.
            </p>

            <p className="text-xl font-medium text-gray-700 italic">One word at a time. One home at a time.</p>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <div className="text-sm text-gray-500">Written by Barkhad Abdi</div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  )
}
