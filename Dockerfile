# 1. Bazaviy image: Node.js 18
FROM node:22

# 2. Ish papkasini yaratish
WORKDIR /app

# 3. Paketlarni ko‘chirish va o‘rnatish
COPY package*.json ./
RUN npm install

# 4. Loyihani konteynerga ko‘chirish
COPY . .

# 5. Portni ochish
EXPOSE 5173

# 6. React dev serverni ishga tushirish
CMD ["npm", "run", "dev", "--", "--host"]
