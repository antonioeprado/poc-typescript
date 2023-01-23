PGDMP     
    9                 {            poc_typescript #   14.6 (Ubuntu 14.6-0ubuntu0.22.04.1) #   14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)     %           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            &           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            '           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            (           1262    27162    poc_typescript    DATABASE     c   CREATE DATABASE poc_typescript WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE poc_typescript;
                postgres    false            �            1259    27177    Tasks    TABLE     �   CREATE TABLE public."Tasks" (
    id integer NOT NULL,
    "taskName" text NOT NULL,
    "taskDescription" text,
    "dueTo" timestamp(3) without time zone,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public."Tasks";
       public         heap    postgres    false            �            1259    27176    Tasks_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Tasks_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Tasks_id_seq";
       public          postgres    false    211            )           0    0    Tasks_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Tasks_id_seq" OWNED BY public."Tasks".id;
          public          postgres    false    210            �            1259    27165    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �           2604    27180    Tasks id    DEFAULT     h   ALTER TABLE ONLY public."Tasks" ALTER COLUMN id SET DEFAULT nextval('public."Tasks_id_seq"'::regclass);
 9   ALTER TABLE public."Tasks" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            "          0    27177    Tasks 
   TABLE DATA           Z   COPY public."Tasks" (id, "taskName", "taskDescription", "dueTo", "createdAt") FROM stdin;
    public          postgres    false    211   �                  0    27165    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    209   c       *           0    0    Tasks_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Tasks_id_seq"', 5, true);
          public          postgres    false    210            �           2606    27185    Tasks Tasks_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Tasks"
    ADD CONSTRAINT "Tasks_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Tasks" DROP CONSTRAINT "Tasks_pkey";
       public            postgres    false    211            �           2606    27173 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    209            "   `   x�mͱ�0D�:�"`��8��2-�/@t(ҕO�%��y��/�$!��5q�J�Ƭ���Ұ���(��\[3*�৚C؞��Dtt� �          �   x�m�Kj�@Eѱ��l���%ɋ�
����IFd�qw �$���3Q�1���EX�DJ+����(���TO��ּ͙�2����5���M�;�a܆d#s! .���mG�U6@��\������������-��]/IN(C��(���:S���HKsc�c�	}5%En���a���z�����ej^��;՝bQsy�#U��q~�c�� ���������Y�     