#! bin/sh
echo "run migration..."
npm run db:up

echo "runing dev..."
npm run dev