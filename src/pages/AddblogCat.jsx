import React from "react";

function AddblogCat() {
  return (
    <div>
      <h3>Add Blog Category</h3>
      <div>
        <form action="">
          <input type="text" placeholder="Enter Blog Category" />
          <button type="submit" className="px-4 py-2 mt-10 bg-green-600 text-white text-sm rounded-sm font-semibold">
            Add blog category
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddblogCat;
