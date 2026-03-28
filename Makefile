.PHONY: install dev build test lint clean docker-up docker-down

install:
	npm install

dev:
	npm run dev

build:
	npm run build

test:
	npm run test

lint:
	npm run lint

clean:
	rm -rf node_modules packages/*/node_modules packages/*/dist packages/host/.angular

docker-up:
	docker compose up --build

docker-down:
	docker compose down
