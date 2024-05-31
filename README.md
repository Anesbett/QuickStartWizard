# Quick Start Wizard

The Quick Start Wizard is a web application that allows users to quickly create a new project by checking the availability of a project name in Azure and then creating the necessary resources in both Azure and GitHub. The project leverages Kubernetes and Terraform scripts for scalability and infrastructure management.

## Features

- **Project Name Availability Check**: Users can input a project name, and the wizard checks in Azure to ensure it's not already in use.
- **Resource Creation**: If the project name is available, the wizard creates the necessary resources for the project in Azure, GitHub, and Kubernetes using Terraform scripts.
- **Visual Feedback**: Upon successful creation of resources, the wizard displays a checkmark icon to indicate successful completion.
- **User Interface**: The user interface is designed to be intuitive and user-friendly, with simple form inputs and clear feedback messages.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python (Flask), Azure SDK for Python
- **Infrastructure as Code**: Terraform for managing infrastructure
- **Container Orchestration**: Kubernetes for managing containerized applications
- **Version Control**: GitHub API for repository creation

## Getting Started

1. Clone the repository to your local machine.
2. Install the required Python packages using `pip install -r requirements.txt`.
3. Set up your Azure credentials and GitHub token.
4. Run the Flask application using `python app.py`.
5. Access the application in your web browser at `http://localhost:3000`.

## Usage

1. Enter a project name in the provided input field.
2. Click the "Create Project" button.
3. If the project name is available, the wizard will create the necessary resources and display a checkmark icon.
4. If the project name is not available, the wizard will display a message indicating that the name is already taken.

## TODO

- Implement Terraform scripts for provisioning Azure resources and Kubernetes clusters.
- Integrate Terraform execution into the project workflow.
- Write Kubernetes manifests for deploying and managing containerized applications.
- Enhance error handling for failed resource creation in Azure, GitHub, and Kubernetes.
- Add authentication and authorization to secure the application.
- Improve user feedback for the project name availability check.
- Support customization options for the created resources (e.g., selecting Azure region, GitHub repository settings).
- Write unit tests for the backend functionality.
- Add logging to track application events and errors.
- Explore integration with additional cloud providers and version control platforms.

## Contributors

- [Andrew Nesbett](https://github.com/Anesbett)
