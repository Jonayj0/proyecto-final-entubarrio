"""empty message

Revision ID: a7de6d937cc5
Revises: 
Create Date: 2024-05-29 18:22:20.855276

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a7de6d937cc5'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('particular',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('vendedor',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('tienda',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre_tienda', sa.String(length=120), nullable=False),
    sa.Column('descripcion_tienda', sa.String(length=500), nullable=True),
    sa.Column('categoria_tienda', sa.String(length=80), nullable=False),
    sa.Column('direccion_tienda', sa.String(length=120), nullable=False),
    sa.Column('url_imagen_tienda', sa.String(), nullable=False),
    sa.Column('vendedor_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['vendedor_id'], ['vendedor.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('nombre_tienda')
    )
    op.create_table('favoritos_tiendas',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('tienda_id', sa.Integer(), nullable=True),
    sa.Column('particular_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['particular_id'], ['particular.id'], ),
    sa.ForeignKeyConstraint(['tienda_id'], ['tienda.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('producto',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre_producto', sa.String(length=120), nullable=False),
    sa.Column('precio', sa.Integer(), nullable=False),
    sa.Column('descripcion_producto', sa.String(length=500), nullable=True),
    sa.Column('categoria_producto', sa.String(length=80), nullable=False),
    sa.Column('url_imagen_producto', sa.String(), nullable=False),
    sa.Column('vendedor_id', sa.Integer(), nullable=True),
    sa.Column('tienda_id', sa.Integer(), nullable=True),
    sa.Column('particular_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['particular_id'], ['particular.id'], ),
    sa.ForeignKeyConstraint(['tienda_id'], ['tienda.id'], ),
    sa.ForeignKeyConstraint(['vendedor_id'], ['vendedor.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favoritos_productos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('producto_id', sa.Integer(), nullable=True),
    sa.Column('particular_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['particular_id'], ['particular.id'], ),
    sa.ForeignKeyConstraint(['producto_id'], ['producto.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favoritos_productos')
    op.drop_table('producto')
    op.drop_table('favoritos_tiendas')
    op.drop_table('tienda')
    op.drop_table('vendedor')
    op.drop_table('particular')
    # ### end Alembic commands ###
