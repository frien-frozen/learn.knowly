import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Knowly Learn',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] font-nunito pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm font-bold text-gray-400 hover:text-[#D92D20] mb-8 block transition-colors">
          ← Back
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101828] mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm font-bold mb-12">Last updated: April 2026</p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">1. Information We Collect</h2>
            <p>learn.knowly.uz does not require account registration for students. We collect anonymous usage data (lesson views, search queries, curriculum visits) to improve content recommendations and platform quality.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">2. How We Use Your Information</h2>
            <p>Usage data is used solely to improve the learning experience — surfacing better search results, understanding which topics students need most, and improving video content delivery.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">3. Cookies & Local Storage</h2>
            <p>We use minimal cookies and local storage for language preferences and UI state. We do not use advertising cookies or cross-site tracking.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">4. Teacher Profile Data</h2>
            <p>Educator names, profile photos, and bios are displayed on lesson pages as part of course content. This information is provided voluntarily by educators and is publicly visible.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">5. Data Sharing</h2>
            <p>We do not sell or share any student data with third parties. YouTube videos embedded in lessons are subject to YouTube's own privacy policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">6. Your Rights</h2>
            <p>You may contact us at any time to inquire about or request deletion of any data we may hold.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101828] mb-3">7. Contact</h2>
            <p>Questions? Reach us at <a href="mailto:contact@knowly.uz" className="text-[#D92D20] font-bold">contact@knowly.uz</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
