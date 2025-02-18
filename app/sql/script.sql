CREATE TABLE [dbo].[Administradores] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Administradores_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Administradores_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Employees] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [lastName] NVARCHAR(1000) NOT NULL,
    [address] NVARCHAR(1000) NOT NULL,
    [position] NVARCHAR(1000) NOT NULL,
    [salary] FLOAT(53) NOT NULL,
    [pension] NVARCHAR(1000) NOT NULL,
    [dni] NVARCHAR(1000) NOT NULL,
    [dateOfBirth] DATETIME2 NOT NULL,
    [dateOfAdmission] DATETIME2 NOT NULL,
    CONSTRAINT [Employees_pkey] PRIMARY KEY CLUSTERED ([id])
);
