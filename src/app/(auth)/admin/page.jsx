import { verifyAuth } from "@/lib/auth";
import { createProject } from "@/lib/db-action";
import Link from "next/link";
import { redirect } from "next/navigation";

const inputStyles =
  "w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200";

export default async function AdminPage() {
  const session = await verifyAuth();
  if (!session.user) redirect("/");

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            Add New Project
          </h1>
          <p className="text-gray-600">
            Fill in the details to add a new project to your portfolio
          </p>
        </div>

        <form
          action={createProject}
          className="space-y-6 rounded-xl bg-white p-2 shadow-lg md:p-8"
        >
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Project Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter project title"
              required
              className={inputStyles}
            />
          </div>

          {/* Description Input */}
          <div>
            <label
              htmlFor="desc"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              rows="4"
              placeholder="Describe your project"
              required
              className={inputStyles}
            />
          </div>

          {/* Image URL Input */}
          <div>
            <label
              htmlFor="img"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <div className="relative">
              <input
                type="url"
                id="img"
                name="img"
                placeholder="https://example.com/image.jpg"
                required
                className={inputStyles}
              />
              <p className="mt-1 text-xs text-gray-500">
                Upload your image to ImgBB and paste the direct link here
              </p>
            </div>
          </div>

          {/* Live Demo Link */}
          <div>
            <label
              htmlFor="link"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Live Demo URL
            </label>
            <input
              type="url"
              id="link"
              name="link"
              placeholder="https://your-project.com"
              className={inputStyles}
            />
          </div>

          {/* GitHub Link */}
          <div>
            <label
              htmlFor="github"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              GitHub Repository
            </label>
            <input
              type="url"
              id="github"
              name="github"
              placeholder="https://github.com/username/repo"
              className={inputStyles}
            />
          </div>

          {/* Technologies Input */}
          <div>
            <label
              htmlFor="technologies"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Technologies
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              placeholder="React, Node.js, MongoDB (comma separated)"
              required
              className={inputStyles}
            />
            <p className="mt-1 text-xs text-gray-500">
              Separate technologies with commas
            </p>
          </div>

          {/* Submit Button */}
          <div className="space-y-4 pt-4 text-center">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 px-6 py-3 text-white transition-all duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
            >
              Add Project
            </button>
            <Link href="/admin/projects" className="text-stone-700">
              see projects
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
