import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function PostRecipe() {
  const navigate = useNavigate();

  const [mediaFiles, setMediaFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const [errors, setErrors] = useState({});

  const sensors = useSensors(useSensor(PointerSensor));

  const handleMediaChange = (e) => {
    const files = Array.from(e.target.files);
    const previewFiles = files.map((file, i) => ({
      id: `${Date.now()}-${file.name}-${i}`,
      file,
      preview: URL.createObjectURL(file),
      type: file.type,
    }));
    setMediaFiles((prev) => [...prev, ...previewFiles]);
  };

  const removeMedia = (id) => {
    setMediaFiles((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = mediaFiles.findIndex((item) => item.id === active.id);
      const newIndex = mediaFiles.findIndex((item) => item.id === over.id);
      setMediaFiles((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  const handleIngredientChange = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const handleInstructionChange = (index, value) => {
    const updated = [...instructions];
    updated[index] = value;
    setInstructions(updated);
  };

  const addIngredient = () => setIngredients([...ingredients, ""]);
  const addInstruction = () => setInstructions([...instructions, ""]);

  const removeIngredient = (index) => {
    const updated = [...ingredients];
    updated.splice(index, 1);
    setIngredients(updated);
  };

  const removeInstruction = (index) => {
    const updated = [...instructions];
    updated.splice(index, 1);
    setInstructions(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    const trimmedIngredients = ingredients.filter((i) => i.trim() !== "");
    const trimmedInstructions = instructions.filter((i) => i.trim() !== "");

    if (mediaFiles.length === 0) {
      formErrors.media = "Please upload at least one image or video.";
    }

    if (title.trim().length === 0) {
      formErrors.title = "Title is required.";
    } else if (title.length > 100) {
      formErrors.title = "Title cannot exceed 100 characters.";
    }

    if (description.trim().length === 0) {
      formErrors.description = "Description is required.";
    } else if (description.length > 250) {
      formErrors.description = "Description cannot exceed 250 characters.";
    }

    if (trimmedIngredients.length === 0) {
      formErrors.ingredients = "Please add at least one ingredient.";
    }

    if (trimmedInstructions.length === 0) {
      formErrors.instructions = "Please add at least one instruction.";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const recipeData = {
      media: mediaFiles.map((item) => item.file),
      title,
      description,
      ingredients: trimmedIngredients,
      instructions: trimmedInstructions,
    };

    console.log("Recipe submitted:", recipeData);
    navigate("/feed");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-lg mt-8 sm:mt-12 mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
        Share a Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Media Upload */}
        <div>
          <label className="block font-medium mb-2">
            Media{" "}
            <span className="text-sm text-gray-500">
              ({mediaFiles.length} selected)
            </span>
          </label>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleMediaChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.media && (
            <p className="text-red-500 text-sm mt-1">{errors.media}</p>
          )}

          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={mediaFiles.map((m) => m.id)} strategy={verticalListSortingStrategy}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                {mediaFiles.map((item, index) => (
                  <SortableMedia
                    key={item.id}
                    item={item}
                    index={index}
                    onRemove={() => removeMedia(item.id)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>

        {/* Title */}
        <div>
          <label className="block font-medium mb-1">
            Title <span className="text-sm text-gray-500">({title.length}/100)</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
            maxLength={100}
            placeholder="e.g. Creamy Pasta Delight"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">
            Description <span className="text-sm text-gray-500">({description.length}/250)</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
            maxLength={250}
            placeholder="What's special about this recipe?"
            rows={3}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">Ingredients</label>
          {ingredients.map((ingredient, idx) => (
            <div key={idx} className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-semibold">{idx + 1}.</span>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(idx, e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder={`Ingredient ${idx + 1}`}
              />
              <button
                onClick={() => removeIngredient(idx)}
                type="button"
                className="text-red-500 text-sm hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className="text-indigo-600 hover:underline text-sm mt-1"
          >
            + Add Ingredient
          </button>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-medium mb-1">Instructions</label>
          {instructions.map((instruction, idx) => (
            <div key={idx} className="flex items-start space-x-2 mb-2">
              <span className="text-sm font-semibold mt-2">{idx + 1}.</span>
              <textarea
                value={instruction}
                onChange={(e) => handleInstructionChange(idx, e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder={`Step ${idx + 1}`}
                rows={2}
              />
              <button
                onClick={() => removeInstruction(idx)}
                type="button"
                className="text-red-500 text-sm mt-2 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addInstruction}
            className="text-indigo-600 hover:underline text-sm mt-1"
          >
            + Add Instruction
          </button>
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit & Global Error */}
        <div className="text-center space-y-2">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Post Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

// 🧩 Sortable Media Component
function SortableMedia({ item, index, onRemove }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative group"
    >
      {item.type.startsWith("video") ? (
        <video
          src={item.preview}
          controls
          className="rounded-md w-full h-32 object-cover"
        />
      ) : (
        <img
          src={item.preview}
          alt={`Media ${index}`}
          className="rounded-md w-full h-32 object-cover"
        />
      )}
      <div className="absolute top-1 right-1">
        <button
          onClick={onRemove}
          type="button"
          className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full opacity-80 hover:opacity-100"
        >
          ✕
        </button>
      </div>
      <p className="text-center text-xs text-gray-600 mt-1">#{index + 1}</p>
    </div>
  );
}
