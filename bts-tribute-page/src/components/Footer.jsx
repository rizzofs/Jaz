import { Heart } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="py-8 bg-black/50 backdrop-blur-sm text-center border-t border-white/10">
            <p className="flex items-center justify-center gap-2 text-purple-200/60 font-light tracking-wide">
                Made with <Heart className="w-4 h-4 text-purple-600 fill-purple-600" /> for Jazmin
            </p>
            <p className="text-xs text-purple-200/30 mt-2">
                Fan Page Project 2026. No copyright infringement intended.
            </p>
        </footer>
    )
}

export default Footer
