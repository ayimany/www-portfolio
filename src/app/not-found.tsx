import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center px-6">
            <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md text-center">
                <h1 className="text-9xl font-bold text-slate-800 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
                <p className="text-lg text-slate-600 mb-8">
                    Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                <p className="text-lg text-slate-600 mb-8">
                Please consider that this page is a work in progress and may be missing some sections!
                </p>

                <Link href="/">
                    <button
                        className="px-8 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium"
                    >
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
}