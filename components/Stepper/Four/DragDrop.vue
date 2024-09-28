<template>
    <v-card outlined
            height="110"
            @dragover.prevent="onDragOver" 
            @dragleave.prevent="onDragLeave"
            @drop.prevent="onFileDrop"
            @click="triggerFileInput">
        <div class="upload-content" :class="{ 'is-dragging': isDragging }">
        <!-- Image preview will show here -->
            <div v-if="image" class="image-preview">
                <img :src="image" alt="Image preview"/>
            </div>
            <!-- Default drag and drop message -->
            <p v-else class="body-2">Click here to select image or drag and drop here</p>
            <!-- Hidden file input -->
            <input type="file" ref="fileInput" @change="onFileChange" accept="image/*" class="file-input" hidden />
        </div>
    </v-card>
</template>
  
<script>
export default {
    data() {
        return {
            isDragging: false, // for drag-over state
            image: null, // holds image preview
        };
    },
    methods: {
        // Handle dragging events
        onDragOver() {
            this.isDragging = true;
        },
        onDragLeave() {
            this.isDragging = false;
        },
        // Triggered when the file is dropped
        onFileDrop(event) {
            this.isDragging = false;
            const files = event.dataTransfer.files;
            if (files.length > 0) {
                this.uploadFile(files[0]);
            }
        },
        // Triggered when the file is selected via input
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.uploadFile(file);
            }
        },
        // Trigger file input click when clicking on the area
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        // Reads and previews the file
        uploadFile(file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.image = e.target.result;
                    this.$emit('input', this.image); // Emit the selected image to the parent
                };
                reader.readAsDataURL(file);
            }
        }
    },
};
</script>

<style scoped>
.upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.upload-container.is-dragging {
    background-color: #f0f8ff;
}

.file-input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.image-preview img {
    max-width: 100%;
    object-fit: cover;
}

.image-preview {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 2px;
}
</style>