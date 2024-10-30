import Logo from "./Logo"

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-900 font-serif">
            <div className="max-w-2xl mx-auto text-center">
                <a href="/">
                    <Logo />
                </a>
                <h1 className="text-xl text-gray-700 mb-4">
                    Curate your inspirations
                </h1>
                <hr />
                <div className="text-left text-sm my-2">
                    <h1 className="text-xl mb-4">Curio Privacy Policy</h1>
                    <p className="text-xs mb-4">Last updated: October 29, 2024</p>

                    <h2 className="font-bold my-2">Information We Collect</h2>
                    <p>We collect minimal information necessary to provide our service:</p>
                    <ul className="list-disc list-inside">
                        <li>Email addresses for our waitlist</li>
                        <li>Basic usage analytics to improve our service</li>
                    </ul>

                    <h2 className="font-bold my-2">How We Use Your Information</h2>
                    <p>We use your email address solely to:</p>
                    <ul className="list-disc list-inside">
                        <li>Keep you updated about Curio's launch</li>
                    </ul>

                    <h2 className="font-bold my-2">Data Protection</h2>
                    <p>We implement security measures to protect your personal information and never sell your data to third parties.</p>

                    <h2 className="font-bold my-2">Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside">
                        <li>Access your personal data</li>
                        <li>Request deletion of your data</li>
                        <li>Opt-out of communications</li>
                    </ul>

                    <h2 className="font-bold my-2">Contact Us</h2>
                    <p>For any privacy-related questions, please contact us at <a href="mailto:hello@curi.ooo" className="text-success-600 hover:text-success-700">hello@curi.ooo</a></p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy; 