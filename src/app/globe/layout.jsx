export const metadata = {
  title: "volumeLight - Globe",
  description:
    "Explore the interactive 3D globe feature of Volume Light, providing visual feedback to help users adjust their speaking volume. This tool aids speech therapists and individuals with Parkinson's Disease in managing voice volume in an engaging and intuitive way.",
  keywords:
    "interactive 3D globe, voice visualization, speech therapy, speech pathology, Parkinson's Disease, voice volume, voice therapy, voice training tool, voice training app, speech therapy tool, voice volume control, voice feedback, visual feedback, speech therapy technology, voice training exercises",
};



export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section >
        {/* Include shared UI here e.g. a header or sidebar */}
        {children}
      </section>
    )
  }