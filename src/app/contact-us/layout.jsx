
export const metadata = {
  title: "Contact Us - VolumeLight",
  description:
    "Contact VolumeLight for inquiries, support, or collaboration opportunities. Reach out to us to learn more about our voice visualization tools for speech therapy and Parkinson's Disease management.",
  keywords:
    "contact us, get in touch, support, inquiries, collaboration, voice visualization, speech therapy, Parkinson's Disease, voice training, speech pathology, voice therapy, VolumeLight contact, VolumeLight support",
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