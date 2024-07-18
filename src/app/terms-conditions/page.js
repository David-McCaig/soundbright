import Head from 'next/head';
import {Container} from '../../components/container'

const TermsConditions = () => {
  return (
    <Container>

      <div className="container mx-auto p-4 mt-9">
        <h1 className="text-3xl font-bold mb-9"><span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">VolumeLight </span> Terms and Conditions</h1>
        
        <section className="mb-9">
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>Welcome to VolumeLight, a voice visualizer application designed to provide visual feedback on speech volume through a 3D globe that changes colors. By using VolumeLight, you agree to comply with and be bound by the following terms and conditions.</p>
        </section>
        
        <section className="mb-9">
          <h2 className="text-2xl font-semibold mb-3">2. Acceptance of Terms</h2>
          <p>By accessing or using VolumeLight, you agree to be bound by these Terms and Conditions, and our Privacy Policy. If you do not agree with any part of these terms, you must not use our application.</p>
        </section>
        
        <section className="mb-9">
          <h2 className="text-2xl font-semibold mb-3">3. Description of Service</h2>
          <p>VolumeLight offers users the ability to visualize their speech volume through a 3D globe that changes color from red to yellow to green, providing immediate and intuitive feedback.</p>
        </section>
        
        <section className="mb-9">
          <h2 className="text-2xl font-semibold mb-3">4. User Responsibilities</h2>
          <ul className="list-disc ml-5">
            <li><strong>Compliance:</strong> Users must ensure that their use of VolumeLight complies with all applicable laws and regulations.</li>
            <li><strong>Accuracy:</strong> Users are responsible for the accuracy of the speech input used in the application.</li>
            <li><strong>Personal Use:</strong> VolumeLight is intended for personal use. Users must not use the app for any commercial purposes without prior written consent from VolumeLight.</li>
          </ul>
        </section>
        
        <section className="mb-9">
          <h2 className="text-2xl font-semibold mb-3">5. Privacy Policy</h2>
          <p>We are committed to protecting your privacy. Our Privacy Policy, which sets out how we collect, use, and protect your information, is available <a href="/privacy-policy" className="text-blue-500 underline">here</a>.</p>
        </section>
        
        <section className="mb-9">
          <h2 className="text-2xl font-semibold mb-3">6. Intellectual Property</h2>
          <ul className="list-disc ml-5">
            <li><strong>Ownership:</strong> All content, features, and functionality of VolumeLight, including but not limited to text, graphics, logos, and software, are the exclusive property of VolumeLight or its licensors and are protected by intellectual property laws.</li>
            <li><strong>Restrictions:</strong> You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our app without our prior written consent.</li>
          </ul>
        </section>
        
        <section className="mb-9">
          <h2 className="text-2xl font-semibold mb-3">7. Limitation of Liability</h2>
          <ul className="list-disc ml-5">
            <li><strong>No Warranties:</strong> VolumeLight is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, expressed or implied, regarding the operation or availability of the app.</li>
            <li><strong>No Liability:</strong> In no event shall VolumeLight or its affiliates be liable for any damages (including, without limitation, incidental and consequential damages, personal injury/wrongful death, lost profits, or damages resulting from lost data or business interruption) resulting from the use or inability to use the app, whether based on warranty, contract, tort, or any other legal theory, and whether or not we are advised of the possibility of such damages.</li>
          </ul>
        </section>
        
        <section className="mb-9">
          <h2 className="text-2xl font-semibold mb-3">8. Modifications to Terms</h2>
          <p>We reserve the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting the revised terms. Your continued use of VolumeLight following the posting of changes constitutes your acceptance of those changes.</p>
        </section>
        
        <section className="mb-9">
          <h2 className="text-2xl font-semibold mb-3">9. Termination</h2>
          <p>We reserve the right to terminate or suspend your access to VolumeLight, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.</p>
        </section>
        
        <section className="mb-9">
          <h2 className="text-2xl font-semibold mb-3">10. Governing Law</h2>
          <p>These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </section>
        
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-3">11. Contact Information</h2>
          <p>For any questions or concerns about these Terms and Conditions, please contact us at [your contact email].</p>
        </section>
      </div>
    </Container>
  );
};

export default TermsConditions;
