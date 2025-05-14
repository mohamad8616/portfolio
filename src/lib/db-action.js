"use server";

import { redirect } from "next/navigation";
import { verifyAuth } from "./auth";
import db from "./db";
import { revalidatePath } from "next/cache";

export async function createProject(formData) {
  //authentication
  const session = await verifyAuth();
  if (!session.user) {
    redirect("/login");
  }

  const title = formData.get("title");
  const desc = formData.get("desc");
  const img = formData.get("img");
  const link = formData.get("link");
  const github = formData.get("github");
  const technologies = formData.get("technologies");
  const createdAt = new Date().getTime();

  try {
    db.prepare(
      `
    INSERT INTO projects (title, img, desc, link, technologies, github, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `,
    ).run(title, img, desc, link, technologies, github, createdAt);
    revalidatePath("/admin/projects");
    console.log("Project created successfully");
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProject(id) {
  const session = await verifyAuth();
  if (!session.user) {
    redirect("/login");
  }

  try {
    db.prepare(`DELETE FROM projects WHERE id = ?`).run(id);
    revalidatePath("/admin/projects");
  } catch (error) {
    console.error(error);
  }
}

export async function updateProject(prevState, formData) {
  const session = await verifyAuth();
  if (!session.user) {
    redirect("/login");
  }

  const title = formData.get("title");
  const desc = formData.get("desc");
  const img = formData.get("img");
  const link = formData.get("link");
  const github = formData.get("github");
  const technologies = formData.get("technologies");
  const id = prevState;

  try {
    db.prepare(
      `
      UPDATE projects SET title = ?, desc = ?, img = ?, link = ?, github = ?, technologies = ? WHERE id = ?
    `,
    ).run(title, desc, img, link, github, technologies, id);
    revalidatePath("/admin/projects");
    console.log("Project updated successfully");
    return { status: "success", message: "Project updated successfully" };
  } catch (error) {
    console.error(error);
    console.log("Failed to update project");
    return { status: "error", message: "Failed to update project" };
  }
}
