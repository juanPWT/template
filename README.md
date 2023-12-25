# Template Next Auth

Template next js yang sudah di config dengan prisma ORM dan next auth

## Usage

Install template setelah clone project:

```bash
  npm install
  cd template-next-auth
```

Configurasi file .env dengan Github dan Google oauth:

```bash

# database config
DATABASE_URL="mysql://root@localhost:3306/template-next"

# for the next config
NEXTAUTH_SECRET="NEXTAUTH_SECRET"
NEXTAUTH_URL="http://localhost:3000/"

# for github and google auth
GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

```

## Configurasi DB

Buat Database terlebih dahulu sebelum configurasi DB:

```bash
npx prisma db push
```

generate schema @prisma/client

```bash
npx prisma generate
```

## Route middleware

setting route di src/middleware.ts

```bash
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth",
  },
});

//setting di sini route yang akan di authtentifikasi
export const config = {
  matcher: "/dashboard/:path*",
};

```

## 🚀 About Me

saya mahasiswa dari STMIK Widya Pratama, yang masih belajar menguasai 5 element terutama element petir.
