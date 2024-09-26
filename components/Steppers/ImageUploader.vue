<template>
  <div class="image-uploader">
    <input
      type="file"
      ref="fileInput"
      @change="handleFileChange"
      accept="image/*"
    />
    <div
      class="drop-zone"
      @dragover.prevent="handleDragOver"
      @drop.prevent="handleDrop"
    >
      <p>Drag and drop an image or click to upload</p>
    </div>
    <img v-if="uploadedImage" :src="uploadedImage" alt="Uploaded Image" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedImage: null,
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      this.uploadImage(file);
    },
    handleDragOver(event) {
      console.log('Drag over');
      event.dataTransfer.dropEffect = "copy";
    },
    handleDrop(event) {
      console.log('Drop');
      const file = event.dataTransfer.files[0];
      this.uploadImage(file);
    },
    uploadImage(file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.uploadedImage = event.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
.image-uploader input[type="file"] {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.drop-zone {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 10px;
  cursor: pointer;
}

.drop-zone:hover {
  background-color: #f0f0f0;
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}
</style>