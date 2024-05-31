document
  .getElementById("projectForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const projectName = document.getElementById("projectName").value;

    const createResult = { message: "Resources created successfully" };
    document.getElementById("result").innerText = createResult.message;

    // Display checkmark
    const checkmark = document.getElementById("checkmark");
    checkmark.style.display = "block";

    // Hide checkmark after a short delay
    setTimeout(() => {
      checkmark.style.display = "none";
    }, 2000); // Adjust the duration (in milliseconds) as needed

    // Fetching to make sure the resource is available
    // ----------------------------------------------------------------
    // const response = await fetch("/checkProjectName", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ projectName: projectName }),
    // });

    // const result = await response.json();

    // if (result.isAvailable) {
    //   // Proceed to create resources
    //   const createResponse = await fetch("/createResources", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ projectName: projectName }),
    //   });

    //   const createResult = await createResponse.json();
    //   document.getElementById("result").innerText = createResult.message;
    // } else {
    //   document.getElementById("result").innerText =
    //     "Project name is already taken.";
    // }
    // ----------------------------------------------------------------

    // Shake button animation
    // document.getElementById("projectForm").classList.add("shake");

    // // Shake button animation
    // document.getElementById("projectForm").classList.add("shake");
    // setTimeout(() => {
    //   document.getElementById("projectForm").classList.remove("shake");
    // }, 500); // Adjust the duration (in milliseconds) to match the animation duration
  });
