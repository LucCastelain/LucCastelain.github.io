"use client"

import {useLanguageContext} from "@/components/ui/languages/languages-provider.component";
import {EN_DATA, EN_RESUME_TYPE} from "@/data/data.en";
import {FR_DATA, FR_RESUME_TYPE} from "@/data/data.fr";
import {CH_DATA, CH_RESUME_TYPE} from "@/data/data.ch";

export default function ResumeDataComponent(): ResumeData {
    const language = useLanguageContext();
    let data = EN_DATA;
    let resumeType: ResumeType;

    switch(language.language) {
        case "français":
            data = FR_DATA;
            resumeType = FR_RESUME_TYPE;
            break;
        case "中文":
            data = CH_DATA;
            resumeType = CH_RESUME_TYPE;
            break;
        default:
            data = EN_DATA;
            resumeType = EN_RESUME_TYPE;
    }

    return {
        types: {
            ALL: resumeType.ALL,
            EDUCATION: resumeType.EDUCATION,
            EXPERIENCE: resumeType.EXPERIENCE
        },
        experiences: [
            {
                id: "high-school",
                title: data.highSchool_title,
                summary: data.highSchool_summary,
                company: data.highSchool_company,
                companyWebsite: data.highSchool_company_website,
                location: data.highSchool_location,
                startDate: new Date(data.highSchool_startDate),
                endDate: new Date(data.highSchool_endDate),
                type: resumeType.EDUCATION,
                software: [],
                programmingLanguages: [],
                keypoints: []
            },
            {
                id: "erasmus-exchange",
                title: data.erasmusExchange_title,
                summary: data.erasmusExchange_summary,
                company: data.erasmusExchange_company,
                companyWebsite: data.erasmusExchange_company_website,
                location: data.erasmusExchange_location,
                startDate: new Date(data.erasmusExchange_startDate),
                endDate: new Date(data.erasmusExchange_endDate),
                type: resumeType.EDUCATION,
                software: [],
                programmingLanguages: [],
                keypoints: []
            },
            {
                id: "engineering-degree",
                title: data.engineeringDegree_title,
                summary: data.engineeringDegree_summary,
                company: data.engineeringDegree_company,
                companyWebsite: data.engineeringDegree_company_website,
                location: data.engineeringDegree_location,
                startDate: new Date(data.engineeringDegree_startDate),
                endDate: new Date(data.engineeringDegree_endDate),
                type: resumeType.EDUCATION,
                software: [],
                programmingLanguages: [],
                keypoints: []
            },
            {
                id: "three-months-internship",
                title: data.threeMonthsInternship_title,
                summary: data.threeMonthsInternship_summary,
                company: data.threeMonthsInternship_company,
                companyWebsite: data.threeMonthsInternship_company_website,
                location: data.threeMonthsInternship_location,
                startDate: new Date(data.threeMonthsInternship_startDate),
                endDate: new Date(data.threeMonthsInternship_endDate),
                type: resumeType.EXPERIENCE,
                software: [data.software.QT],
                programmingLanguages: [data.programming_languages.C_PLUSPLUS],
                keypoints: []
            },
            {
                id: "four-months-internship",
                title: data.fourMonthsInternship_title,
                summary: data.fourMonthsInternship_summary,
                company: data.fourMonthsInternship_company,
                companyWebsite: data.fourMonthsInternship_company_website,
                location: data.fourMonthsInternship_location,
                startDate: new Date(data.fourMonthsInternship_startDate),
                endDate: new Date(data.fourMonthsInternship_endDate),
                type: resumeType.EXPERIENCE,
                software: [data.software.SVN, data.software.VSCODE, data.software.UNITY],
                programmingLanguages: [data.programming_languages.C_PLUSPLUS, data.programming_languages.C_SHARP, data.programming_languages.UML],
                keypoints: []
            },
            {
                id: "engineering-internship",
                title: data.engineeringInternship_title,
                summary: data.engineeringInternship_summary,
                company: data.engineeringInternship_company,
                companyWebsite: data.genesys_company_website,
                location: data.engineeringInternship_location,
                startDate: new Date(data.engineeringInternship_startDate),
                endDate: new Date(data.engineeringInternship_endDate),
                type: resumeType.EXPERIENCE,
                software: [data.software.GITHUB, data.software.CONFLUENCE],
                programmingLanguages: [data.programming_languages.NODEJS, data.programming_languages.JS, data.programming_languages.JQUERY, data.programming_languages.HTML, data.programming_languages.CSS],
                keypoints: []
            },
            {
                id: "genesys",
                title: data.genesys_title,
                summary: data.genesys_summary,
                company: data.genesys_company,
                companyWebsite: data.genesys_company_website,
                location: data.genesys_location,
                startDate: new Date(data.genesys_startDate),
                endDate: new Date(data.genesys_endDate),
                type: resumeType.EXPERIENCE,
                software: [data.software.GITHUB, data.software.CONFLUENCE, data.software.JIRA],
                programmingLanguages: [data.programming_languages.NODEJS, data.programming_languages.JS, data.programming_languages.ANGULAR_JS, data.programming_languages.REACT_JS, data.programming_languages.HTML, data.programming_languages.CSS],
                keypoints: []
            },
            {
                id: "freelance",
                title: data.freelance_title,
                summary: data.freelance_summary,
                company: data.freelance_company,
                location: data.freelance_location,
                startDate: new Date(data.freelance_startDate),
                endDate: new Date(data.freelance_endDate),
                type: resumeType.EXPERIENCE,
                software: [data.software.GITHUB, data.software.XCODE, data.software.GODOT],
                programmingLanguages: [data.programming_languages.GD_SCRIPT, data.programming_languages.UML],
                keypoints: []
            }
        ]
    };
}

interface ResumeData {
    types: ResumeType;
    experiences: ExperienceData[];
}

export interface ExperienceData {
    id: string,
    title: string,
    summary: string,
    company: string,
    companyWebsite?: string,
    location: string,
    startDate: Date,
    endDate?: Date,
    type: string,
    software: string[],
    programmingLanguages: string[],
    keypoints: Keypoint[]
}

interface Keypoint {
    title: string,
    description: string,
    link?: string,
}

export interface ResumeType {
    ALL: string;
    EDUCATION: string;
    EXPERIENCE: string;
}