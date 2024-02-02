       
            const imageContainer = document.getElementById("image-container");
            const overlay = document.getElementById("overlay");

            // Function to detect faces
            function detectFaces() {
                // Code to detect faces using a face detection library or API
                // For example, you can use the face-api.js library or the Azure Face API

                // Once faces are detected, you can draw rectangles around them on the overlay
                const faces = [
                    { x: 100, y: 100, width: 200, height: 200 },
                    { x: 300, y: 150, width: 180, height: 180 }
                ];

                faces.forEach(face => {
                    const faceRect = document.createElement("div");
                    faceRect.style.position = "absolute";
                    faceRect.style.left = face.x + "px";
                    faceRect.style.top = face.y + "px";
                    faceRect.style.width = face.width + "px";
                    faceRect.style.height = face.height + "px";
                    faceRect.style.border = "2px solid red";
                    overlay.appendChild(faceRect);
                });
            }

            // Call the detectFaces function when the image is loaded
            imageContainer
                .querySelector("img")
                .addEventListener("load", detectFaces);
        