<template>
    <v-card
      class="file-drop-area"
      @click="triggerFileInput"
      @dragover.prevent="handleDragOver"
      @dragleave="handleDragLeave"
      @drop.prevent="handleFileDrop"
      :class="{ 'drag-over': isDragging }"
    >
      <input type="file" accept="image/*" @change="handleFileSelect" ref="fileInput" hidden />
  
      <!-- Show text only if no image is selected -->
      <p v-if="!image">Click here to select image or drag and drop here</p>
  
      <!-- Show the image if an image is selected -->
      <img v-if="image" :src="image" alt="Selected Image" />
    </v-card>
</template>
  
  <script>
  export default {
    data() {
      return {
        isDragging: false,
        image: null, // For storing the selected image as a base64 URL
      };
    },
    methods: {
      handleDragOver() {
        this.isDragging = true;
      },
      handleDragLeave() {
        this.isDragging = false;
      },
      handleFileDrop(event) {
        this.isDragging = false;
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
          this.processFile(droppedFiles[0]);
        }
      },
      handleFileSelect(event) {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
          this.processFile(selectedFile);
        }
      },
      processFile(file) {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.image = e.target.result; // Set the image as base64 URL
            this.$emit('image-uploaded', true); // Emit event when image is uploaded
          };
          reader.readAsDataURL(file);
        }
      },
      triggerFileInput() {
        this.$refs.fileInput.click(); // Open the file dialog
      },
    },
  };
</script>
  
<style scoped>
  .file-drop-area {
    border: 1px solid #dddddd;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    position: relative;
    border-radius: 2px;
  }
  .file-drop-area.drag-over {
    border-color: #3f51b5;
    background-color: #f0f0f0;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  
</style>