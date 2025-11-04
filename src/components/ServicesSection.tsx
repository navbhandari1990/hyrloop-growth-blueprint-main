import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, MessageSquare, Star, ChartBar, Shield, Lightbulb, CheckCircle, Sparkles, ArrowRight, Zap } from 'lucide-react';
import * as PhosphorIcons from "@phosphor-icons/react";

const ServicesSection = () => {
    const services = [
        {
            icon: Users,
            title: "Core Recruitment Solutions",
            description: "Precision-driven recruitment services designed to unlock your organization's human capital potential.",
            subServices: [
                "Strategic Recruitment Services",
                "Executive Search & Leadership Hiring",
                "Talent Acquisition (TA) Strategy",
                "Diversity & Inclusion Hiring"
            ],
            color: "bg-gradient-to-br from-blue-500 to-cyan-500",
            featured: true
        },
        {
            icon: PhosphorIcons.ListBullets,
            title: "Staffing Solutions",
            description: "Comprehensive staffing options that align perfectly with your strategic business goals.",
            subServices: [
                "Permanent Staffing Solutions",
                "Contract & Temporary Staffing",
                "Project-Based Workforce",
                "Recruitment Process Outsourcing (RPO)"
            ],
            color: "bg-gradient-to-br from-purple-500 to-pink-500"
        },
        {
            icon: PhosphorIcons.ListChecks,
            title: "Specialized Hiring Programs",
            description: "Tailored hiring programs including volume recruitment and remote workforce strategies.",
            subServices: [
                "Volume & Bulk Hiring",
                "Campus Recruitment Programs",
                "C-Suite & Leadership Placement",
                "Remote & Hybrid Workforce Solutions"
            ],
            color: "bg-gradient-to-br from-green-500 to-emerald-500"
        },
        {
            icon: MessageSquare,
            title: "Payroll & Compensation",
            description: "End-to-end payroll services with strategic compensation benchmarking and structuring.",
            subServices: [
                "Tax & Statutory Compliance",
                "Compensation Benchmarking",
                "Benefits Structuring & Advisory",
                "Complete Payroll Processing"
            ],
            color: "bg-gradient-to-br from-amber-500 to-orange-500"
        },
        {
            icon: Shield,
            title: "HR Operations & Compliance",
            description: "Navigate complex HR regulations with expert policy development and compliance management.",
            subServices: [
                "HR Policy Development",
                "SOP Design & Implementation",
                "Global Statutory Compliance",
                "HR Audits & Risk Assessment"
            ],
            color: "bg-gradient-to-br from-red-500 to-pink-500"
        },
        {
            icon: Lightbulb,
            title: "Strategic HR Services",
            description: "Complete HR transformation services from performance management to technology implementation.",
            subServices: [
                "Performance Management Systems",
                "HRIS & ATS Implementation",
                "Employee Engagement Programs",
                "0-to-1 HR Function Setup"
            ],
            color: "bg-gradient-to-br from-indigo-500 to-purple-500",
            featured: true
        }
    ];

    const getIconComponent = (icon: any) => {
        if (typeof icon === 'function') {
            return React.createElement(icon, { className: "w-6 h-6 text-white" });
        } else {
            return null;
        }
    };

    return (
        <section id="services" className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-hyrloop-blue/10 to-indigo-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20">
                    <Badge className="mb-6 bg-gradient-to-r from-hyrloop-blue to-indigo-600 text-white px-6 py-3 text-sm font-medium shadow-lg">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Our Service Portfolio
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-gray-900 via-hyrloop-blue to-indigo-600 bg-clip-text text-transparent">
                            Comprehensive HR Solutions
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-hyrloop-blue via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            For Every Stage
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We provide <span className="font-semibold text-hyrloop-blue">comprehensive HR solutions</span> designed specifically for startups and growing companies.
                        Our services can be engaged individually or as a complete package to <span className="font-semibold text-hyrloop-blue">accelerate your growth</span>.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-hyrloop-blue to-indigo-600 mx-auto mt-10 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {services.map((service, index) => (
                        <Card 
                            key={index} 
                            className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                                service.featured ? 'lg:scale-105 ring-2 ring-hyrloop-blue/20' : ''
                            }`}
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            
                            {/* Content */}
                            <CardHeader className="relative z-10 p-8 space-y-6 bg-white group-hover:bg-transparent transition-colors duration-500">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {getIconComponent(service.icon)}
                                </div>
                                
                                {/* Featured Badge */}
                                {service.featured && (
                                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1">
                                        <Star className="w-3 h-3 mr-1" />
                                        Popular
                                    </Badge>
                                )}
                                
                                {/* Title */}
                                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500">
                                    {service.title}
                                </CardTitle>
                                
                                {/* Description */}
                                <CardDescription className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                                    {service.description}
                                </CardDescription>
                                
                                {/* Sub-services */}
                                <div className="space-y-3 pt-4">
                                    {service.subServices.map((subService, subIndex) => (
                                        <div key={subIndex} className="flex items-center space-x-3 group-hover:text-white transition-colors duration-500">
                                            <CheckCircle className="w-4 h-4 text-hyrloop-blue group-hover:text-white flex-shrink-0" />
                                            <span className="text-sm font-medium text-gray-700 group-hover:text-white/90">
                                                {subService}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* CTA */}
                                <div className="pt-6">
                                    <button className="flex items-center space-x-2 text-hyrloop-blue group-hover:text-white font-semibold transition-colors duration-500 group-hover:bg-white/10 px-4 py-2 rounded-lg">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-hyrloop-blue to-indigo-600 bg-clip-text text-transparent">
                                Ready to Transform Your HR Strategy?
                            </span>
                        </h3>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Let's discuss how our services can be tailored to your startup's unique needs and growth stage.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn-gradient px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <Zap className="w-5 h-5 mr-2 inline" />
                                Get Free Consultation
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 hover:border-hyrloop-blue hover:text-hyrloop-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;