import React from "react";

function AddCategory() {
  return (
    <div>
      <h3>Add Category</h3>
      <div>
        <form action="">
          <input type="color" placeholder="Enter Color" />
          <button type="submit" className="px-4 py-2 mt-10 bg-green-600 text-white text-sm rounded-sm font-semibold">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCategory;
