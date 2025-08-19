import { prisma } from '../../lib/prisma'

export default async function TestPage() {
  try {
    await prisma.$connect()
    const userCount = await prisma.user.count()
    
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Will - Test Page</h1>
        <p className="text-green-600 mt-4">✅ Database connected successfully!</p>
        <p className="mt-2">Total users in database: {userCount}</p>
      </div>
    )
  } catch (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Will - Test Page</h1>
        <p className="text-red-600 mt-4">❌ Database connection failed</p>
      </div>
    )
  }
}