import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const members = [
  { name: 'RM', realName: 'Kim Namjoon', role: 'Leader, Main Rapper', color: 'from-blue-500 to-indigo-600', image: '/assets/rm.png' },
  { name: 'Jin', realName: 'Kim Seokjin', role: 'Sub Vocalist, Visual', color: 'from-pink-400 to-rose-400', image: '/assets/jin.png' },
  { name: 'Suga', realName: 'Min Yoongi', role: 'Lead Rapper', color: 'from-gray-700 to-black', image: '/assets/suga.png' },
  { name: 'J-Hope', realName: 'Jung Hoseok', role: 'Main Dancer, Sub Rapper', color: 'from-red-500 to-orange-500', image: '/assets/jhope.png' },
  { name: 'Jimin', realName: 'Park Jimin', role: 'Main Dancer, Lead Vocalist', color: 'from-yellow-400 to-orange-300', image: '/assets/jimin.png' },
  { name: 'V', realName: 'Kim Taehyung', role: 'Sub Vocalist, Visual', color: 'from-green-600 to-emerald-800', image: '/assets/v.png' },
  { name: 'Jungkook', realName: 'Jeon Jungkook', role: 'Main Vocalist, Lead Dancer, Center', color: 'from-purple-600 to-violet-800', image: '/assets/jungkook.png' },
]

const Members = () => {
    return (
        <section className="py-20 w-full min-h-screen relative z-10 bg-bts-dark">
             <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                >
                    THE MEMBERS
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="w-full max-w-sm bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-purple-500/20 duration-300"
                        >
                            <div className={`h-64 relative overflow-hidden group`}>
                                <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-20 z-10`}></div>
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bts-dark via-transparent to-transparent opacity-90 z-20"></div>
                                <Star className="absolute top-4 right-4 text-white/50 w-6 h-6 z-30" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-1 text-white">{member.name}</h3>
                                <p className="text-sm text-gray-400 mb-4">{member.realName}</p>
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-4"></div>
                                <p className="text-purple-300 font-medium">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
             </div>
        </section>
    )
}

export default Members
