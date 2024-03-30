# Start your image with a node base image
FROM node:18-alpine as build-stage

# The /app directory should act as the main application directory
WORKDIR /app

# Copy local directories to the current local directory of our docker image (/app)
COPY . .

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN yarn
RUN yarn build
# RUN rm -fr node_modules

# production stage
FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

# EXPOSE 3000

# # Start the app using serve command
# CMD [ "serve", "-s", "build" ]