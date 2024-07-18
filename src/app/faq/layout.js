export const metadata = {
    title: "VolumeLight - Frequently Asked Questions (FAQ)",
    description: "Find answers to common questions about VolumeLight, a voice visualizer application providing real-time feedback on speech volume.",
    keywords: "VolumeLight, FAQ, frequently asked questions, voice visualizer, speech volume, real-time feedback, 3D globe",
  };
  
  export default function TermsConditionsLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className="bg-primary-bg-color">
        {/* Include shared UI here e.g. a header or sidebar */}
        {children}
      </section>
    );
  }