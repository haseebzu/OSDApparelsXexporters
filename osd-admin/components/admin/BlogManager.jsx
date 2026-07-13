"use client";

import { startTransition, useActionState, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Edit3, Plus, Trash2 } from "lucide-react";
import { AdminModal } from "@/components/admin/AdminModal";
import { AdminToast } from "@/components/admin/AdminToast";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { deleteBlogPostModalAction, saveBlogPostModalAction } from "@/lib/actions";

const initialActionState = { ok: false, message: "" };

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function emptyPost() {
  return {
    id: "",
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
    status: "draft",
    cover_image: "",
  };
}

function BlogEditorModal({ post, isOpen, onClose, onSuccess }) {
  const router = useRouter();
  const isEditing = Boolean(post?.id);
  const [saveState, saveAction, savePending] = useActionState(saveBlogPostModalAction, initialActionState);
  const [deleteState, deleteAction, deletePending] = useActionState(deleteBlogPostModalAction, initialActionState);
  const [statusIntent, setStatusIntent] = useState(post?.status || (post?.published ? "published" : "draft") || "draft");
  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [slugTouched, setSlugTouched] = useState(Boolean(post?.id));
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setStatusIntent(post?.status || (post?.published ? "published" : "draft") || "draft");
    setTitle(post?.title || "");
    setSlug(post?.slug || "");
    setSlugTouched(Boolean(post?.id));
    setDirty(false);
  }, [post]);

  useEffect(() => {
    if (!slugTouched) {
      setSlug(slugify(title));
    }
  }, [title, slugTouched]);

  useEffect(() => {
    if (saveState.ok) {
      onSuccess(saveState.message);
      setDirty(false);
      router.refresh();
      onClose();
    }
  }, [saveState, router, onClose, onSuccess]);

  useEffect(() => {
    if (deleteState.ok) {
      onSuccess(deleteState.message);
      setDirty(false);
      router.refresh();
      onClose();
    }
  }, [deleteState, router, onClose, onSuccess]);

  const liveUrl = useMemo(() => {
    if (!slug) return "";
    return `http://localhost:3000/blog/${slug}`;
  }, [slug]);

  function handleClose() {
    if (dirty && !window.confirm("You have unsaved changes. Close this editor anyway?")) {
      return;
    }

    onClose();
  }

  function handleDelete() {
    if (!window.confirm("Delete this blog post? This cannot be undone.")) {
      return;
    }

    const formData = new FormData();
    formData.set("id", post.id);
    formData.set("slug", post.slug || "");
    startTransition(() => {
      deleteAction(formData);
    });
  }

  return (
    <AdminModal isOpen={isOpen} onClose={handleClose} size="xl" title={isEditing ? "Edit Blog Post" : "Create Blog Post"}>
      <form action={saveAction} className="admin-form admin-form--modal" onChange={() => setDirty(true)}>
        <input name="id" type="hidden" value={post?.id || ""} readOnly />
        <input name="previousSlug" type="hidden" value={post?.slug || ""} readOnly />
        <input name="status" type="hidden" value={statusIntent} readOnly />
        <input name="currentCoverImage" type="hidden" value={post?.cover_image || post?.feature_image || ""} readOnly />

        <div className="admin-form__grid admin-form__grid--two">
          <label className="admin-field">
            <span>Title</span>
            <input
              name="title"
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Article title"
              required
              type="text"
              value={title}
            />
          </label>

          <label className="admin-field">
            <span>Slug</span>
            <input
              name="slug"
              onChange={(event) => {
                setSlugTouched(true);
                setSlug(event.target.value);
              }}
              placeholder="article-slug"
              required
              type="text"
              value={slug}
            />
          </label>
        </div>

        <div className="admin-form__grid admin-form__grid--two">
          <label className="admin-field">
            <span>Category</span>
            <input defaultValue={post?.category || ""} name="category" placeholder="Private Label" type="text" />
          </label>

          <label className="admin-field">
            <span>Cover Image Upload</span>
            <input accept="image/*" name="coverImage" type="file" />
          </label>
        </div>

        {(post?.cover_image || post?.feature_image) ? (
          <div className="admin-note">
            Current cover image is set. Upload a new image only if you want to replace it.
          </div>
        ) : null}

        <label className="admin-field">
          <span>Excerpt</span>
          <textarea defaultValue={post?.excerpt || ""} name="excerpt" placeholder="Short card summary..." />
        </label>

        <label className="admin-field">
          <span>Content</span>
          <textarea
            defaultValue={post?.content || ""}
            name="content"
            placeholder="Write the article body..."
            required
          />
        </label>

        {!saveState.ok && saveState.message ? <p className="admin-message admin-message--error">{saveState.message}</p> : null}
        {!deleteState.ok && deleteState.message ? <p className="admin-message admin-message--error">{deleteState.message}</p> : null}

        <div className="admin-modal__footer">
          <div className="admin-actions">
            {liveUrl ? (
              <a className="button button--outline button--compact" href={liveUrl} rel="noreferrer" target="_blank">
                View Live
              </a>
            ) : null}
            {isEditing ? (
              <button
                className="button button--danger button--compact"
                disabled={deletePending}
                onClick={handleDelete}
                type="button"
              >
                {deletePending ? "Deleting..." : "Delete"}
              </button>
            ) : null}
          </div>

          <div className="admin-actions">
            <button className="button button--outline button--compact" onClick={handleClose} type="button">
              Cancel
            </button>
            <button
              className="button button--outline button--compact"
              disabled={savePending}
              onClick={() => setStatusIntent("draft")}
              type="submit"
            >
              {savePending && statusIntent === "draft" ? "Saving..." : "Save as Draft"}
            </button>
            <button
              className="button button--gold button--compact"
              disabled={savePending}
              onClick={() => setStatusIntent("published")}
              type="submit"
            >
              {savePending && statusIntent === "published" ? "Publishing..." : "Publish"}
            </button>
          </div>
        </div>
      </form>
    </AdminModal>
  );
}

export function BlogManager({ items }) {
  const [toast, setToast] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  function openForNew() {
    setSelectedPost(emptyPost());
  }

  function openForEdit(post) {
    setSelectedPost(post);
  }

  function handleSuccess(message) {
    setToast({ type: "success", message });
    window.setTimeout(() => setToast(null), 3000);
  }

  return (
    <>
      <AdminToast toast={toast} />

      <div className="admin-toolbar admin-toolbar--inline">
        <div className="admin-toolbar__spacer" />
        <button className="button button--gold button--compact" onClick={openForNew} type="button">
          <Plus size={16} />
          <span>New Post</span>
        </button>
      </div>

      {items.length ? (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Published</th>
                <th aria-label="Edit post" />
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id || item.slug}>
                  <td>
                    <div className="admin-table__title">
                      <strong>{item.title}</strong>
                      <span>{item.slug}</span>
                    </div>
                  </td>
                  <td>{item.category || "General"}</td>
                  <td>
                    <StatusBadge value={item.status || (item.published ? "published" : "draft")} />
                  </td>
                  <td>{item.publishedLabel}</td>
                  <td className="admin-table__actions-cell">
                    <button className="admin-icon-button" onClick={() => openForEdit(item)} type="button">
                      <Edit3 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {selectedPost ? (
        <BlogEditorModal
          isOpen={Boolean(selectedPost)}
          onClose={() => setSelectedPost(null)}
          onSuccess={handleSuccess}
          post={selectedPost}
        />
      ) : null}
    </>
  );
}
