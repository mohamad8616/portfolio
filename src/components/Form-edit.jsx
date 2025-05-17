"use client";
import { updateProject } from "@/lib/db-action";
import { useState, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

const inputStyle =
  "mt-1 block w-full text-stone-800 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm";
const labelStyle = "block text-sm font-medium text-gray-700 dark:text-gray-300";

export default function FormEdit({ project, setIsOpen }) {
  const [formData, setFormData] = useState({
    title: project.title,
    img: project.img,
    desc: project.desc,
    link: project.link || "",
    github: project.github || "",
    technologies: project.technologies.join(", "),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Initialize form state with updateProject
  const [state, formAction] = useFormState(updateProject, project.id);
  const formStatus = useFormStatus();

  // Close modal when update is successful
  useEffect(() => {
    if (state?.status === "success") {
      setIsOpen(false);
    }
  }, [state, setIsOpen]);

  return (
    <form className="space-y-6" action={formAction}>
      {state?.status === "error" && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-700 dark:bg-red-900/50 dark:text-red-200">
          {state.message}
        </div>
      )}

      {/* Title */}
      <div>
        <label htmlFor="title" className={labelStyle}>
          Project Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>

      {/* createdAt */}
      {/* <div>
        <label htmlFor="createdAt" className={labelStyle}>
          Created At
        </label>
        <input
          type="date"
          id="createdAt"
          name="createdAt"
          value={formData.createdAt}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div> */}
      {/* Image URL */}
      <div>
        <label htmlFor="img" className={labelStyle}>
          Image URL
        </label>
        <input
          type="text"
          id="img"
          name="img"
          value={formData.img}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="desc" className={labelStyle}>
          Description
        </label>
        <textarea
          id="desc"
          name="desc"
          rows="3"
          value={formData.desc}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>

      {/* Technologies */}
      <div>
        <label htmlFor="technologies" className={labelStyle}>
          Technologies (comma-separated)
        </label>
        <input
          type="text"
          id="technologies"
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          placeholder="React, Node.js, MongoDB"
          className={inputStyle}
          required
        />
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="link" className={labelStyle}>
            Live Demo URL
          </label>
          <input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="github" className={labelStyle}>
            GitHub URL
          </label>
          <input
            type="url"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={formStatus.pending}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 dark:focus:ring-offset-gray-800"
        >
          {formStatus.pending ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
