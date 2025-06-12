"use client";

import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient';
import Sidebar from '@/components/Sidebar';
import QuestionsLayout from '@/components/layouts/QuestionsLayout';
import JSCodingLayout from '@/components/layouts/JSCodingLayout';
import AlgoCodingLayout from '@/components/layouts/AlgoCodingLayout';
import UICodingLayout from '@/components/layouts/UICodingLayout';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import Navbar from '@/components/Navbar';
import CheatSheetLayout from '@/components/layouts/CheatsheetLayout';
import ConceptsLayout from '@/components/layouts/ConceptsLayout';

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [layout, setLayoutState] = useState("dashboard-layout");

    // Handle setLayout with localStorage
    const setLayout = (value: string) => {
        setLayoutState(value);
        localStorage.setItem("selectedLayout", value);
    };

    useEffect(() => {
        const savedLayout = localStorage.getItem("selectedLayout");
        if (savedLayout) {
            setLayoutState(savedLayout);
        }

        const fetchQuestions = async () => {
            const { data, error }: any = await supabase
                .from('questions')
                .select('*');
            if (error) {
                console.error('Error fetching questions:', error);
            } else {
                setQuestions(data);
            }
        };

        fetchQuestions();
    }, []);

    return (
        <>
            <Navbar layout={layout} setLayout={setLayout} />
            <div className='lg:flex'>
                <div className='relative min-w-[20vw] max-w-[20vw] w-[20vw] min-h-[70vh] border-r hidden lg:inline-block'>
                    <Sidebar layout={layout} setLayout={setLayout} />
                </div>

                <div className='mt-15'>
                    {
                        layout === "questions-layout" ? <QuestionsLayout questions={questions} /> :
                        layout === "dashboard-layout" ? <DashboardLayout questions={questions} /> :
                        layout === "uicoding-layout" ? <UICodingLayout /> :
                        layout === "algocoding-layout" ? <AlgoCodingLayout /> :
                        layout === "concepts-layout" ? <ConceptsLayout /> :
                        layout === "cheatsheet-layout" ? <CheatSheetLayout /> :
                        layout === "jscoding-layout" ? <JSCodingLayout /> :
                        null
                    }
                </div>
            </div>
        </>
    );
};

export default Questions;
