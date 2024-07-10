'use client';

import React from "react";
import { useRef } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { message } from "antd";

import Button from "./primary-button";

import { TransitionEffect } from "../lib/transition-effect";

const ContactUsForm = () => {
    const formRef = useRef(null);
console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID + "env var")
    const { transitionRef, determineTransitionType } = TransitionEffect();

    const validate = (values) => {
        const errors = {};

        if (!values.user_name) {
            errors.user_name = "Required";
        } else if (values.user_name.length > 15) {
            errors.user_name = "Must be 15 characters or less";
        }

        if (!values.message) {
            errors.message = "Required";
        } else if (values.message.length < 1) {
            errors.message = "Must be 20 characters or less";
        }

        if (!values.user_email) {
            errors.user_email = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)
        ) {
            errors.user_email = "Invalid email address";
        }

        return errors;
    };

    const handleSubmit = (values, { resetForm }) => {
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );
        message.loading("Sending message").then(
            (res) => {
                message.success("Message sent", 2);
                resetForm({ values: "" });
            },
            () => {
                message.error(
                    "Message not sent. Try again or email me at davidmccaig1@gmail.com",
                    4
                );
            }
        );
    };

    const formik = useFormik({
        initialValues: {
            user_name: "",
            message: "",
            user_email: "",
        },
        validate,
        onSubmit: handleSubmit,
    });

    return (
        <form
            style={determineTransitionType("translateY(0px)")}
            className="flex flex-col w-96 lg:w-[36rem]"
            ref={formRef}
            onSubmit={formik.handleSubmit}
        >
            <div ref={transitionRef} className="text-center">
                <h1 className="text-2xl font-semibold title-font mb-4 text-gray-900 sm:text-3xl dark:text-white">
                    Get in Touch
                </h1>
                <p className="mx-auto leading-relaxed text-base text-gray-500 mb-4 max-w-lg dark:text-white">
                    We&apos;re here to help and answer any questions you might have. Fill out the form below, and we&apos;ll get back to you as soon as possible.     </p>
            </div>
            <label className="mb-1 mt-5 dark:text-white" htmlFor="user_name">
                Name
            </label>
            <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                id="user_name"
                name="user_name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.user_name}
            />
            {formik.touched.user_name && formik.errors.user_name ? (
                <div className="text-red-500 mt-1">{formik.errors.user_name}</div>
            ) : null}
            <div className="mt-6">
                <label className="mb-1 dark:text-white" htmlFor="user_email">
                    Email Address
                </label>
                <input
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    id="user_email"
                    name="user_email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_email}
                />
                {formik.touched.user_email && formik.errors.user_email ? (
                    <div className="text-red-500 mt-1">{formik.errors.user_email}</div>
                ) : null}
            </div>
            <label className="mb-1 mt-6 dark:text-white" htmlFor="message">
                Message
            </label>
            <textarea
                className="resize-none block mb-12 p-2.5 h-20 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                id="message"
                name="message"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 mt-1">{formik.errors.message}</div>
            ) : null}

            {/* <button
                className="transition duration-1000 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent text-white font-bold py-2 px-4 rounded-md mt-12"
                type="submit"
            >
                Submit
            </button> */}
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default ContactUsForm;