export const metadata = {
  title: "VolumeLight - Terms and Conditions",
  description:
    "Terms and Conditions for using VolumeLight, a voice visualizer application providing real-time feedback on speech volume.",
  keywords:
    "VolumeLight, voice visualizer, speech volume, terms and conditions, real-time feedback, 3D globe",
};

export default function TermsConditionsLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </section>
  );
}
