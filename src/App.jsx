import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import EmailForm from './components/EmailForm'
import Logo from './components/Logo'
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
    const searchParams = new URLSearchParams(window.location.search);
    const redirect = searchParams.get('redirect');

    if (redirect) {
        return (
            <Router basename="">
                <Routes>
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/" element={<Navigate to={redirect} />} />
                </Routes>
            </Router>
        );
    }

    return (
        <Router basename="">
            <Routes>
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/" element={
                    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-900 font-serif">
                        <div className="max-w-2xl mx-auto text-center">
                            <Logo />
                            <h1 className="text-xl text-gray-700 mb-4">
                                Curate your inspirations
                            </h1>
                            <hr />
                            <div className="flex flex-col gap-2 my-2 text-left">
                                <h2 className="text-lg">
                                    About this project
                                </h2>
                                <p className="text-sm">
                                    I'm a frequent reader and former Pocket and Omnivore user. I've been working on a passion project to make my reading experience even better, and I'd love to share it with you when it's ready.
                                </p>
                                <p className="text-sm">
                                    The project will be open source, easy to self-host, and free to use (with maybe a premium feature or two to cover hosting costs).
                                </p>
                                <p className="text-sm">
                                    Some features I'm working on:
                                </p>
                                <ul className="flex flex-col items-start list-disc list-inside text-sm mx-4">
                                    <li>Save all kinds of links, including text articles but also pages for videos, podcasts, movies, etc.</li>
                                    <li>For articles, have a clean reading experience with a focus on content</li>
                                    <li>Use the app on web, Android, and iOS, and easily save items via a Chrome extension</li>
                                    <li>Subscribe to email newsletters and read them in the app</li>
                                    <li>Add notes, highlights, and tags to your items</li>
                                    <li>(If it's cost-effective) AI-powered article summaries and/or audio content</li>
                                    <li>Taking other suggestions!</li>
                                </ul>
                                <p className="text-sm mt-4">
                                    If this resonates with you, please sign up below and I'll let you know when it's ready.
                                </p>
                            </div>
                            <EmailForm />
                            <p className="text-sm mt-4">
                                No spam, I promise! And feel free to email me with any questions at <a href="mailto:hello@curi.ooo" className="text-success-600 hover:text-success-700">hello@curi.ooo</a>.
                            </p>
                            <div className="flex gap-4 justify-center text-sm text-gray-400 mt-8">
                                <a href="https://kimberli.me" className="hover:text-gray-300">About me</a>
                                <a href="/privacy" className="hover:text-gray-300">Privacy policy</a>
                            </div>
                        </div>
                    </div>
                } />
            </Routes>
        </Router>
    )
}

export default App 