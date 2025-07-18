import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  Linkedin,
  Github,
} from "lucide-react"
import Navbar from "./layouts/Navbar" // sigurohu që rruga është e saktë

const Contact = () => {
  return (
    <div className="bg-black flex flex-col min-h-screen ">
      
      {/* ✅ Navbar vendosur këtu sipër formës */}
      <Navbar />

      {/* Contact Form Section */}
      <div className="flex items-center justify-center p-10 mt-20">
        <Card className="w-full max-w-xl shadow-2xl">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-3xl font-bold text-center text-black">Contact Me</h2>
            <p className="text-center text-blue-500 text-sm">
              Let's build something amazing together. Reach out below.
            </p>
            <div className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your full name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here..." rows={4} />
              </div>
              <Button className="w-full bg-blue-500 text-white">
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Section */}
     
    </div>
  )
}

export default Contact
