import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Knowly Learn',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] font-nunito pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm font-bold text-gray-400 hover:text-[#D92D20] mb-8 block transition-colors">
          ← Back
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101828] mb-2">Terms of Service</h1>
        <p className="text-gray-400 text-sm font-bold mb-12">Last updated: April 2026</p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">1. Acceptance</h2>
            <p>By accessing learn.knowly.uz, you agree to these Terms of Service. If you do not agree, please do not use this platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">2. Free Educational Use</h2>
            <p>Knowly Learn provides free video lessons aligned with Cambridge IGCSE, A-Levels, and Pearson Edexcel standards. All content is for personal, non-commercial educational use only.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">3. Content Ownership</h2>
            <p>All lessons, materials, and platform designs are owned by Knowly or their respective educators. You may not reproduce, redistribute, or use content commercially without written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">4. Student Conduct</h2>
            <p>Users agree to access the platform for genuine educational purposes and not to attempt to scrape, disrupt, or abuse the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">5. Third-Party Content</h2>
            <p>Video lessons are hosted on YouTube. By watching embedded videos, you are subject to YouTube's Terms of Service and Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">6. Disclaimer</h2>
            <p>Knowly Learn is provided "as is" without warranty. We aim for continuous availability but cannot guarantee uninterrupted access.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">7. Contact</h2>
            <p>Questions? Contact us at <a href="mailto:contact@knowly.uz" className="text-[#D92D20] font-bold">contact@knowly.uz</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
