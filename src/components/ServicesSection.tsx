
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, MessageSquare, Star, ChartBar, Shield, Lightbulb } from 'lucide-react';
import * as PhosphorIcons from "@phosphor-icons/react";
const ServicesSection = () => {
    const services = [
        {
            icon: Users,
            title: "Core Recruitment Solutions",
            description:
                "Precision-driven recruitment services, talent acquisition, executive search, and diversity hiring initiatives. Unlocking your organization's human capital potential.",
            subServices: [
                "Recruitment Services",
                "Talent Acquisition (TA)",
                "Executive Search",
                "Diversity Hiring Initiatives",
            ],
        },
        {
            icon: PhosphorIcons.ListBullet,
            title: "Staffing Solutions",
            description:
                "From permanent roles to contract and temporary placements, we provide staffing options that align with your strategic goals.",
            subServices: [
                "Permanent Staffing",
                "Contract Staffing",
                "Temporary & Project-Based Staffing",
                "Recruitment Process Outsourcing (RPO)",
            ],
        },
        {
            icon: PhosphorIcons.ListChecks,
            title: "Specialized Hiring Programs",
            description:
                "Tailored programs including volume hiring, campus recruitment, leadership placements, and remote/hybrid workforce strategies. We adapt to your unique needs.",
            subServices: [
                "Volume & Bulk Hiring",
                "Campus Recruitment",
                "Leadership Hiring",
                "Remote & Hybrid Workforce Hiring",
            ],
        },
        {
            icon: MessageSquare,
            title: "Payroll and Compensation",
            description:
                "Comprehensive payroll and compensation services, including tax & statutory deductions, benchmarking, C&B structuring, and end-to-end processing.",
            subServices: [
                "Tax & Statutory Deductions",
                "Compensation Benchmarking",
                "C&B Structuring & Advisory",
                "End-to-End Payroll Processing",
            ],
        },
        {
            icon: Shield,
            title: "HR Operations & Compliance",
            description:
                "Expertise in policy development, SOP design, local and global statutory compliance, and HR audits. Navigating the complexities so you don't have to.",
            subServices: [
                "HR Policy Development",
                "SOP Design & Implementation",
                "Statutory Compliance (local and global)",
                "HR Audits & Risk Management",
            ],
        },
        {
            icon: Lightbulb,
            title: "Other HR Services",
            description:
                "A full spectrum of HR services, including performance management, HRIS & ATS implementation, employee engagement, and more. Partner with us for a complete HR overhaul.",
            subServices: [
                "Performance Management",
                "HRIS & ATS Implementation",
                "Employee Engagement",
                "Training & Development",
                "Job Architecture & Role Benchmarking",
                "Setting Up HR Function from 0 to 1",
            ],
        },
    ];

    const formatSubServices = (subServices: string[]) => {
        return (
            <ul className="list-disc list-inside text-sm mt-2">
                {subServices.map((subService, subIndex) => (
                    <li key={subIndex} className="text-gray-600">
                        {subService}
                    </li>
                ))}
            </ul>
        );
    };
    const getIconComponent = (icon: any) => {
        if (typeof icon === 'function') {
            return React.createElement(icon, { className: "w-5 h-5 text-hyrloop-blue" });
        } else {
            return null;
        }
    };

  return (
    <section id="services" className="py-20 bg-white section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-hyrloop-blue/10 text-hyrloop-blue hover:bg-hyrloop-blue/20 px-4 py-2 text-sm">What We Offer</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive HR solutions designed specifically for startups and growing companies.
            Our services can be engaged individually or as a complete package to grow your business.
          </p>
          <div className="w-20 h-1 bg-hyrloop-blue mx-auto mt-10 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
                <Card key={index} className="border border-gray-100 shadow hover:shadow-md transition-shadow">
                    <CardHeader className="p-6 space-y-4">
                        <div className="w-10 h-10 rounded-full bg-hyrloop-blue/10 flex items-center justify-center mb-4">
                            {getIconComponent(service.icon)}
                        </div>
                        <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                        <CardDescription className="text-sm">{service.description}</CardDescription>
                        {service.subServices && formatSubServices(service.subServices)}
                    </CardHeader>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
