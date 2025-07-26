"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Calendar,
  Code,
  Palette,
  Globe,
  Sparkles,
  Zap,
  User,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function PersonalWebsite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMobileMenu()

    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const navHeight = 80 // Height of fixed navigation
      const targetPosition = targetElement.offsetTop - navHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  const blogPosts = [
    {
      title: "Why I'm Building This App",
      excerpt:
        "A personal journey about preserving Somali language and culture for my children in Denmark. How an audio-first educational app became my way of bringing our heritage back into everyday life.",
      date: "March 20, 2024",
      slug: "why-im-building-this-app",
      color: "from-rose-500 to-pink-500",
    },
    {
      title: "The Art of Minimalist Design in Web Development",
      excerpt:
        "Why less is more when it comes to creating user-friendly interfaces. Exploring the principles that make websites both beautiful and functional.",
      date: "February 28, 2024",
      slug: "minimalist-design-web-development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Creative Problem Solving in Software Development",
      excerpt:
        "How thinking outside the box leads to innovative solutions. A deep dive into the creative process behind building tools that inspire learning and growth.",
      date: "February 10, 2024",
      slug: "creative-problem-solving-development",
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const skills = [
    {
      icon: Code,
      title: "Salesforce Architecture",
      description: "Enterprise solutions and system integrations",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Palette,
      title: "Creative Development",
      description: "Building educational tools and apps",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Globe,
      title: "Cultural Bridge",
      description: "Connecting heritage with modern technology",
      color: "from-violet-500 to-purple-500",
    },
  ]

  const navItems = [
    { href: "#skills", label: "Skills" },
    { href: "#blog", label: "Blog" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
            >
              Barkhad Abdi
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10" onClick={closeMobileMenu} />
        )}
      </nav>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      {/* Hero Section */}
      <section id="hero" className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/20 shadow-2xl mb-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <Sparkles className="w-4 h-4 mr-2" />
              Available for Salesforce consulting
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Barkhad
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Abdi
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Salesforce Architect by day, building creative tools for learning and growth by night
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 border-0"
              asChild
            >
              <a href="#blog" onClick={(e) => handleNavClick(e, "#blog")}>
                <Zap className="mr-2 h-5 w-5" />
                View Blog
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
                <User className="mr-2 h-5 w-5" />
                About Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative px-4 py-20 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
              What I Do
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Bridging enterprise solutions with creative innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative px-4 py-20 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
              Recent Posts
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Thoughts on development, design, and building tools that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center text-sm text-slate-400 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-slate-400 mb-6 line-clamp-3 group-hover:text-slate-300 transition-colors duration-300">
                    {post.excerpt}
                  </CardDescription>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={`inline-flex items-center font-medium bg-gradient-to-r ${post.color} bg-clip-text text-transparent hover:scale-105 transition-transform duration-300`}
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-4 py-20 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-2xl overflow-hidden">
                <CardContent className="p-10">
                  <div className="prose prose-lg text-slate-300 prose-headings:text-white">
                    <p className="mb-6 text-lg leading-relaxed">
                      Hi, I'm Barkhad! I'm a Salesforce Architect living in Denmark with my wife and two kids. By day, I
                      design and implement enterprise solutions that help organizations transform their business
                      processes. By night, I'm passionate about using technology to preserve heritage and create
                      meaningful connections across generations.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                      As a Somali-Danish family, we navigate the beautiful complexity of multiple languages and cultures
                      every day. Currently, I'm working on an audio-first educational app designed to help Somali
                      children connect with their language and culture. It's a deeply personal project born from my own
                      experience as a parent who wants his kids to feel proud of their roots while thriving in their
                      Danish home.
                    </p>
                    <p className="text-lg leading-relaxed">
                      I'm always excited to connect with fellow Salesforce professionals, parents, developers, and
                      anyone passionate about using technology to bridge cultures and preserve languages. Feel free to
                      reach out!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-125 animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Barkhad Abdi"
                  width={400}
                  height={400}
                  className="relative rounded-full shadow-2xl border-4 border-white/20 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="relative bg-black/20 backdrop-blur-md text-white px-4 py-16 mt-20 border-t border-white/10 z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              I'd love to hear from you. Whether it's about a project, collaboration, or just to say hello!
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-12">
            <Link
              href="https://github.com/yourusername"
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl hover:bg-white/10 border border-white/10 shadow-lg hover:shadow-xl group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 group-hover:text-purple-300 transition-colors duration-300" />
              <span className="font-medium">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl hover:bg-white/10 border border-white/10 shadow-lg hover:shadow-xl group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 group-hover:text-blue-300 transition-colors duration-300" />
              <span className="font-medium">LinkedIn</span>
            </Link>
            <Link
              href="mailto:your.email@example.com"
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl hover:bg-white/10 border border-white/10 shadow-lg hover:shadow-xl group"
            >
              <Mail className="h-6 w-6 group-hover:text-pink-300 transition-colors duration-300" />
              <span className="font-medium">Email</span>
            </Link>
          </div>

          <div className="text-center text-slate-400 text-sm border-t border-white/10 pt-8">
            <p>&copy; {new Date().getFullYear()} Barkhad Abdi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
